import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, from, throwError, map, switchMap } from 'rxjs';
import { catchError } from 'rxjs/operators';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

export interface ContactForm {
    name: string;
    email: string;
    phone: string;
    projectType: string;
    message?: string;
}

export interface ContactFormResponse {
    success: boolean;
    message: string;
}

/**
 * Form submission service for contact form
 * 
 * Note: Update apiUrl with actual backend endpoint
 */
@Injectable({
    providedIn: 'root'
})
export class FormSubmissionService {
    submitContact(formData: ContactForm): Observable<ContactFormResponse> {
        const cfg = environment.emailJs;

        if (!cfg?.publicKey || !cfg?.serviceId || !cfg?.templateId) {
            return throwError(
                () => new Error('EmailJS n\'est pas configuré. Veuillez renseigner les clés dans environment.*.ts')
            );
        }

        const templateParams: Record<string, unknown> = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            projectType: formData.projectType,
            message: formData.message ?? ''
        };

        return from(
            emailjs.send(cfg.serviceId, cfg.templateId, templateParams, {
                publicKey: cfg.publicKey
            })
        ).pipe(
            map(() => ({ success: true, message: 'Message envoyé.' })),
            switchMap((res) => {
                const autoReplyTemplateId = cfg.autoReplyTemplateId?.trim();
                if (!autoReplyTemplateId) {
                    return from(Promise.resolve(res));
                }

                return from(
                    emailjs.send(cfg.serviceId, autoReplyTemplateId, templateParams, {
                        publicKey: cfg.publicKey
                    })
                ).pipe(map(() => res));
            }),
            catchError((err) => this.handleError(err))
        );
    }

    /**
     * Handle HTTP errors
     */
    private handleError(error: HttpErrorResponse | unknown) {
        let errorMessage = 'Une erreur est survenue. Veuillez réessayer.';

        if (error instanceof HttpErrorResponse && error.error instanceof ErrorEvent) {
            // Client-side error
            errorMessage = `Erreur: ${error.error.message}`;
        } else if (error instanceof HttpErrorResponse) {
            // Server-side error
            errorMessage = `Erreur ${error.status}: ${error.message}`;
        } else if (error instanceof Error) {
            errorMessage = error.message;
        }

        console.error('Form submission error:', error);
        return throwError(() => new Error(errorMessage));
    }
}
