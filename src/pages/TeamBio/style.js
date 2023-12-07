import styled from "styled-components";

export const HeaderWrapper = styled.div`
background:#F8F7FE;
height: 86px;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 44px;

.header-title{
color: #6C6A73;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
display: flex;
gap: 8px;

.sub-title{
    font-size: 20px;
    font-weight: 700;
    color: #000;
}

}

.header-search-container{
    width: 40%;
    display: flex;
    align-items: center;
    gap: 25px;

    .tab-container{
        width: 300px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        border-radius: 12px;

button{
    display: block;
  background-color:#fff;
  color: #000;
  text-align: center;
  padding: 1rem 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  height: 40px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
    }

    .tab-active{
        background-color: var(--primary-color);
        color: #fff;
        border-radius: 12px;
    }

    }
}



`

export const ContentWrapper = styled.div`
height: calc(100vh - 110px);
padding: 20px 44px 0 44px;
overflow-y: auto;

`