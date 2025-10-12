import React from 'react';

import styled from 'styled-components';
import foodImage from './images/smokedsalmonburgers.jpg';
import tomatosoup from './images/tomatorecipelede.webp';
import spicy from './images/recipepotato.webp';
import chiken from './images/chickenbiryani.webp';
import timer from './images/timer.png';
import servings from './images/servings.png';
import calories from './images/calories.png';

const AppContainer = styled.div`
  background-color: #fff8dc;
  min-height: 100vh;
  padding: 40px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  background-color: #fff;
  border-radius: 20px;
  width: 270px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Img = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 15px;
`;

const FoodName = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-top: 15px;
`;

const InfoList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #fffbea;
  border-radius: 30px;
  padding: 10px 25px;
  list-style: none;
  margin: 15px 0;
`;

const InfoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #555;
`;

const Svg = styled.img`
  width: 18px;
  height: 18px;
`;

const DifficultyWrapper = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 10px 0;
  width: 80%;
  margin: 0 auto;
`;

const DifficultyTitle = styled.p`
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

const DifficultyList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DifficultyItem = styled.li`
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 13px;

  &.yes {
    background-color: #ff6347;
    color: white;
    border-radius: 30px;
  }
`;

function App() {
  return (
    <AppContainer>
      <List>
        <Item>
          <Img src={foodImage} alt="Smoked salmon burger" />
          <FoodName>Smoked salmon burger</FoodName>
          <InfoList>
            <InfoItem>
              <Svg src={timer} alt="timer" />
              <span>20 min</span>
            </InfoItem>
            <InfoItem>
              <Svg src={servings} alt="servings" />
              <span>6 servings</span>
            </InfoItem>
            <InfoItem>
              <Svg src={calories} alt="calories" />
              <span>210 calories</span>
            </InfoItem>
          </InfoList>

          <DifficultyWrapper>
            <DifficultyTitle>Difficulty</DifficultyTitle>
            <DifficultyList>
              <DifficultyItem className='yes'>Easy</DifficultyItem>
              <DifficultyItem>Medium</DifficultyItem>
              <DifficultyItem>Hard</DifficultyItem>
            </DifficultyList>
          </DifficultyWrapper>
        </Item>

        <Item>
          <Img src={tomatosoup} alt="Tomatoes With Creamy Feta" />
          <FoodName>Tomatoes With Creamy Feta</FoodName>
          <InfoList>
            <InfoItem>
              <Svg src={timer} alt="timer" />
              <span>15 min</span>
            </InfoItem>
            <InfoItem>
              <Svg src={servings} alt="servings" />
              <span>3 servings</span>
            </InfoItem>
            <InfoItem>
              <Svg src={calories} alt="calories" />
              <span>600 calories</span>
            </InfoItem>
          </InfoList>

          <DifficultyWrapper>
            <DifficultyTitle>Difficulty</DifficultyTitle>
            <DifficultyList>
              <DifficultyItem className='yes'>Easy</DifficultyItem>
              <DifficultyItem>Medium</DifficultyItem>
              <DifficultyItem>Hard</DifficultyItem>
            </DifficultyList>
          </DifficultyWrapper>
        </Item>

        <Item>
          <Img src={spicy} alt="Spicy potato salad" />
          <FoodName>Spicy potato salad</FoodName>
          <InfoList>
            <InfoItem>
              <Svg src={timer} alt="timer" />
              <span>30 min</span>
            </InfoItem>
            <InfoItem>
              <Svg src={servings} alt="servings" />
              <span>2 servings</span>
            </InfoItem>
            <InfoItem>
              <Svg src={calories} alt="calories" />
              <span>320 calories</span>
            </InfoItem>
          </InfoList>

          <DifficultyWrapper>
            <DifficultyTitle>Difficulty</DifficultyTitle>
            <DifficultyList>
              <DifficultyItem >Easy</DifficultyItem>
              <DifficultyItem className='yes'>Medium</DifficultyItem>
              <DifficultyItem >Hard</DifficultyItem>
            </DifficultyList>
          </DifficultyWrapper>
        </Item>

        <Item>
          <Img src={chiken} alt="Chicken Biryani" />
          <FoodName>Chicken Biryani</FoodName>
          <InfoList>
            <InfoItem>
              <Svg src={timer} alt="timer" />
              <span>40 min</span>
            </InfoItem>
            <InfoItem>
              <Svg src={servings} alt="servings" />
              <span>4 servings</span>
            </InfoItem>
            <InfoItem>
              <Svg src={calories} alt="calories" />
              <span>700 calories</span>
            </InfoItem>
          </InfoList>

          <DifficultyWrapper>
            <DifficultyTitle>Difficulty</DifficultyTitle>
            <DifficultyList>
              <DifficultyItem>Easy</DifficultyItem>
              <DifficultyItem>Medium</DifficultyItem>
              <DifficultyItem className='yes'>Hard</DifficultyItem>
            </DifficultyList>
          </DifficultyWrapper>
        </Item>
      </List>
    </AppContainer>
  );
}

export default App;
