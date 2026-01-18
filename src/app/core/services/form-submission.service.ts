import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

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
    // TODO: Update with actual API endpoint
    private apiUrl = '/api/contact';

    constructor(private http: HttpClient) { }

    /**
     * Submit contact form
     */
    submitContact(formData: ContactForm): Observable<ContactFormResponse> {
        return this.http.post<ContactFormResponse>(this.apiUrl, formData).pipe(
            retry(1), // Retry once on failure
            catchError(this.handleError)
        );
    }

    /**
     * Handle HTTP errors
     */
    private handleError(error: HttpErrorResponse) {
        let errorMessage = 'Une erreur est survenue. Veuillez réessayer.';

        if (error.error instanceof ErrorEvent) {
            // Client-side error
            errorMessage = `Erreur: ${error.error.message}`;
        } else {
            // Server-side error
            errorMessage = `Erreur ${error.status}: ${error.message}`;
        }

        console.error('Form submission error:', error);
        return throwError(() => new Error(errorMessage));
    }
}
