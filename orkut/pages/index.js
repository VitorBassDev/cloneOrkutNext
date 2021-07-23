
import React from "react";
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'


export default function Home() {

  return (
    <MainGrid>
      <div style={{gridArea: 'profileArea'}}>
        <Box>
        <img src={`https://github.com/Vitorbassdev.png`} style={{ borderRadius: '8px' }} />
        </Box>
      </div>

      <div style={{gridArea: 'welcomeArea'}}>
        <Box>
          Bem Vindo
        </Box>
      </div>

      <div style={{gridArea: 'profileRelationsArea'}}>
        <Box>
          Pessoas da Comunidade
        </Box>
      </div>

      <div style={{gridArea: 'profileRelationsArea'}}>
        <Box>
          Comunidades
        </Box>
      </div>

    </MainGrid>
  )
}

  // Pós Projeto: 
  // - Buscar do GitHub a foto de Perfil do usuário Logado
  // - Buscar do GitHub a foto de perfil dos followers
  // - Buscar do GitHub a foto de perfil dos followings