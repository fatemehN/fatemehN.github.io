// Light/dark theme toggle. Loaded in <head> (not deferred) so the saved theme
// is applied before the page paints, avoiding a flash of the wrong colors.
(function () {
    var root = document.documentElement;
    var systemDark = window.matchMedia('(prefers-color-scheme: dark)');

    function savedTheme() {
        try { return localStorage.getItem('theme'); } catch (e) { return null; }
    }

    function apply(theme) {
        root.setAttribute('data-theme', theme);
        var button = document.querySelector('.theme-toggle');
        if (button) {
            button.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
        }
    }

    function current() {
        return savedTheme() || (systemDark.matches ? 'dark' : 'light');
    }

    apply(current());

    // Follow the device setting until the visitor picks a theme themselves.
    systemDark.addEventListener('change', function () {
        if (!savedTheme()) apply(current());
    });

    document.addEventListener('DOMContentLoaded', function () {
        var button = document.querySelector('.theme-toggle');
        if (!button) return;
        button.hidden = false;
        apply(current());
        button.addEventListener('click', function () {
            var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            try { localStorage.setItem('theme', next); } catch (e) { /* private mode: still switch */ }
            apply(next);
        });
    });
})();
