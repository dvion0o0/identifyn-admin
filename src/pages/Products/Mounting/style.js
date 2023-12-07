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

    .btn{
        width: 300px;
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

.mainTable{
  border-collapse: collapse;
  width: 100%;
  vertical-align: middle;

 td, th {
  padding: 16px 14px;
}

tr:nth-child(odd){
border-radius: 8px;
background: rgba(245, 245, 245, 0.80);
}
 th {
  padding-top: 12px;
  padding-bottom: 20px;
  text-align: left;
  background-color: white;
  color: #6C6A73;
  font-size: 14px;
  font-weight: 400;

&:last-child{
    text-align: right;
}

}

td{
color: #000;
font-size: 14px;
font-weight: 400;
line-height: 20px;
    &:last-child{
        text-align: right;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
    &:first-child{
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }
}
    
    }


`