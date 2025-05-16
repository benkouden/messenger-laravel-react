import Echo from 'laravel-echo';

window.Echo = new Echo({
    broadcaster: 'reverb',
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: import.meta.env.VITE_REVERB_HOST ?? window.location.hostname,
    wsPort: import.meta.env.VITE_REVERB_PORT ?? 80,
    scheme: import.meta.env.VITE_REVERB_SCHEME ?? 'http',
    authEndpoint: '/broadcasting/auth',
    enabledTransports: ['ws'],
});
