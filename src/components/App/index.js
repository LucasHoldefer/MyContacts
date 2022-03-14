import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../assets/styles/global';
import defaultStyles from '../../assets/styles/themes/default';

import { Container } from './styles';
import Header from '../Header';
import Routes from '../../routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultStyles}>
        <GlobalStyles />
        <Container>
          <Header />

          <Routes />

        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
