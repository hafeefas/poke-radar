import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg,rgb(30, 175, 119) 0%,rgb(47, 63, 109) 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png') no-repeat center right;
    background-size: contain;
    opacity: 0.1;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, transparent 0%, #1e40af 70%);
    z-index: 2;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 3;
`;

const HeroSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
  gap: 4rem;

  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
    padding: 4rem 2rem;
  }
`;

const ContentSection = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #ffd700;
  text-shadow: 3px 3px 0px #2563eb;
  line-height: 1.2;
  font-family: 'Pokemon Solid', sans-serif;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  color: #e2e8f0;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &.primary {
    background: linear-gradient(135deg, #ffd700 0%, #ffa500 100%);
    color: #1e40af;
    border: none;
    box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
    }
  }
  
  &.secondary {
    background: transparent;
    border: 2px solid #ffd700;
    color: #ffd700;
    
    &:hover {
      background: rgba(255, 215, 0, 0.1);
      box-shadow: 0 0 15px rgba(255, 215, 0, 0.2);
    }
  }
`;

const FeatureSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 6rem;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0.15);
  }

  h3 {
    color: #ffd700;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
  }
  
  p {
    color: #e2e8f0;
    line-height: 1.6;
    font-size: 1.1rem;
  }
`;

const StatsSection = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 4rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const StatsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  h4 {
    font-size: 3.5rem;
    color: #ffd700;
    margin-bottom: 0.5rem;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
    font-family: 'Pokemon Solid', sans-serif;
  }

  p {
    color: #e2e8f0;
    font-size: 1.25rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <Content>
        <HeroSection>
          <ContentSection>
            <Title>Your Pokémon Journey Begins</Title>
            <Description>
              Embark on an epic adventure through the world of Pokémon. Access comprehensive
              information about every species, master type matchups, and become the ultimate
              Pokémon trainer!
            </Description>
            <ButtonGroup>
              <Button className="primary" onClick={() => navigate('/pokedex')}>
                Open Pokédex
              </Button>
              <Button className="secondary" onClick={() => navigate('/pokedex')}>
                Learn More
              </Button>
            </ButtonGroup>
          </ContentSection>
        </HeroSection>

        <FeatureSection>
          <FeatureGrid>
            <FeatureCard>
              <h3>⚡ Complete Pokédex</h3>
              <p>Detailed information on all Pokémon species, from Bulbasaur to the latest discoveries</p>
            </FeatureCard>
            <FeatureCard>
              <h3>🔥 Battle Stats</h3>
              <p>Comprehensive battle statistics, abilities, and move sets for competitive training</p>
            </FeatureCard>
            <FeatureCard>
              <h3>✨ Evolution Chains</h3>
              <p>Track evolution paths and learn about special evolution requirements</p>
            </FeatureCard>
            <FeatureCard>
              <h3>🎯 Type Calculator</h3>
              <p>Master type advantages and build the perfect team composition</p>
            </FeatureCard>
          </FeatureGrid>
        </FeatureSection>

        <StatsSection>
          <StatsGrid>
            <StatCard>
              <h4>900+</h4>
              <p>Pokémon Species</p>
            </StatCard>
            <StatCard>
              <h4>18</h4>
              <p>Type Categories</p>
            </StatCard>
            <StatCard>
              <h4>4000+</h4>
              <p>Unique Moves</p>
            </StatCard>
          </StatsGrid>
        </StatsSection>
      </Content>
    </HomeContainer>
  );
};

export default HomePage;
