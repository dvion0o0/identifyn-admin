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
    justify-content: flex-end;

    .btn{
        width: 180px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

`

export const ContentWrapper = styled.div`
height: calc(100vh - 110px);
padding: 20px 44px 0 44px;
overflow-y: auto;


.teams-container{
  display: flex;
  flex-direction: column;
  gap: 30px;

  .team-type{
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 28px;
color: #1E1E1E;
margin-bottom: 12px;
  }

  .team-members{
    display: flex;
    flex-direction: column;
    gap: 30px;

    .team-member{
border-radius: 20px;
background: linear-gradient(0deg, #F5F5F5 0%, #F5F5F5 100%), #FFF;
display: flex;
padding: 16px 20px;
align-items: center;
justify-content: space-between;

.left-container, .member-info{
  display: flex;
  align-items: center;
  gap: 20px;
}

.member-img{
    width: 80px;
    height: 80px;

    img{
        width: 100%;
        height: 100%;
    }
}

.member-name{
  font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 24px;
color:#1E1E1E;
}


.member-position{
  font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px;
text-transform: uppercase;
color: #6c6a73;
}

  }

  }






}

`