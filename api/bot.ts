// @ts-nocheck
export default async function handler(req, res) {
    try {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');

        return res.status(200).json({
            status: "ready",
            message: "If you see this, the code is executing correctly on Vercel.",
            diagnostics: {
                node: process.version,
                fetch_available: typeof fetch !== 'undefined',
                env_key_present: !!process.env['GROQ_API_KEY'],
                time: new Date().toISOString()
            }
        });
    } catch (err) {
        return res.status(500).json({
            status: "crash_during_execution",
            error: err.message
        });
    }
}
