import SearchAppBar from '../AppBar/SearchAppBar';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../Themes/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SearchAppBar />
      </ThemeProvider>
    </>
  );
}

export default App;
