/**
 * Inline script that runs before React hydration to prevent flash of wrong theme.
 * Reads the saved theme from localStorage and applies data-theme to <html>.
 */
export function ThemeScript() {
  const script = `
    (function() {
      try {
        var theme = localStorage.getItem('macatago-theme');
        if (theme && ['solar','tierra','nocturno'].includes(theme)) {
          document.documentElement.setAttribute('data-theme', theme);
        } else {
          document.documentElement.setAttribute('data-theme', 'solar');
        }
      } catch(e) {
        document.documentElement.setAttribute('data-theme', 'solar');
      }
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
