import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.ts";
import { GlobalStyle } from "./styles/global.ts";
import { Profile } from "./components/Profile/index.tsx";
import { ListLinks } from "./components/ListLinks/index.tsx";
import { Footer } from "./components/Footer/index.tsx";
import { SocialMedias } from "./components/SocialMedias/index.tsx";
import { Toggle } from "./components/Toggle/index.tsx";
import { Container } from "./styles/style.ts";

export function App() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
      <Container>
        <Profile username="@ita_gustavo" isDarkTheme={isDarkTheme} />

        <Toggle
          theme={isDarkTheme}
          toggleTheme={() => setIsDarkTheme(!isDarkTheme)}
        />

        <ListLinks
          links={[
            { message: "github", url: "https://github.com/Yta-ux" },
            { message: "linkedin", url: "https://www.linkedin.com/in/%C3%ADtalo-gustavo/" },
            { message: "instagram", url: "https://www.instagram.com/ita_gustavo/" },
          ]}
        />

        <SocialMedias
          isDarkMode={isDarkTheme}
          medias={[
            { name: "github", url: "https://github.com/Yta-ux" },
            { name: "linkedin", url: "https://www.linkedin.com/in/%C3%ADtalo-gustavo/" },
            { name: "instagram", url: "https://www.instagram.com/ita_gustavo/" },
          ]}
        />

        <Footer author={{ name: "Ítalo Gustavo", url: "https://github.com/Yta-ux" }} />

        <div className="gradient1"></div>
        <div className="gradient2"></div>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
