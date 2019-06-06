import {Component, h} from '@stencil/core';
import styled from 'styled-stencil';
import data from './data';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 450px 112px;
  width: 100vw;
  height: 562px;
  background-color: rgb(51, 51, 51);
`;

export const FirstRow = styled.div`
  grid-row: 1;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(4, 1fr);
  width: 100vw;
  height: 100%;
  padding: 0 32px;
`;

export const SecondRow = styled.div`
  grid-row: 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100vw;
  height: 100%;
  padding: 0 36px;
  align-items: center;
  border-top: 2px solid #666666;
`;

export const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 32px 0 0 0;
  & > ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    & > li {
      display: flex;
      flex-direction: column;
      height: 8px;
      width: 100%;
      color: #f7f7f7;
      letter-spacing: 0.2px;
      padding: 10px 0;
      text-decoration: underline;
      font-weight: 300;
      font-size: 14px;
    }
  }
`;

export const ListTitle = styled.div`
  color: #f7f7f7;
  padding: 8px 0 0 0;
  /* font-family: ProximaNova-Bold; */
  font-size: 16px;
  height: 24px;
  font-weight: 600;
  width: 138px;
  border-bottom: 2px solid #666666;
`;

@Component({
  tag: 'my-footer',
})
export class MyFooter {
  renderContent(data: any): HTMLElement[] {
    return data.map(
      (d: any): any => (
        <ListWrap key={d.id}>
          <ListTitle>{d.title}</ListTitle>
          <ul>
            {d.elements.map(
              (elm: string[]): HTMLElement => (
                <li>{elm}</li>
              ),
            )}
          </ul>
        </ListWrap>
      ),
    );
  }

  render() {
    return (
      <Wrapper>
        <FirstRow>{this.renderContent(data)}</FirstRow>
        <SecondRow />
      </Wrapper>
    );
  }
}
