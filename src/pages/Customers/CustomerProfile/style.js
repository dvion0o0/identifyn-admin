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
align-items: center;

.sub-title{
    font-size: 20px;
    font-weight: 700;
    color: #000;
}

}

.header-search-container{
    display: flex;
    align-items: center;
    gap: 25px;

    .sub-title{
        font-size: 18px;
    }

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
padding: 40px 44px 0 44px;
overflow-y: auto;

.profile-details-container{
    display: grid;
    grid-template-columns: 30% 70%;
    gap: 32px;
    align-items: center;

.profile-details, .address-details{
width: 100%;
height: 304px;
padding: 16px;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.05);
}

.profile-header{
    display: flex;
    gap: 20px;
    margin-bottom: 30px;

img{
    width: 86px;
    height: 86px;
    border-radius: 12px;
    object-fit: cover;
    backdrop-filter: blur(19px);
}

}

.profile-title{
    display: flex;
    flex-direction: column;
    h3{
color:#000;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 36px;
    }

    h5{
        color:#3F1BD0;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
    }
}

.profile-content{
    display: flex;
    flex-direction: column;
    gap: 20px;

.profile-item{
    span{
        font-size: 12px;
        color:#9a9a9a;
    }

    h4{
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #000;
    }
}

}


.address-details{
    overflow: hidden;
    .tab-container{
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #EDEDED;
        border-radius: 12px;

button{
    display: block;
  background-color:#EDEDED;
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

.address-wrapper{
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    height: 220px;
    overflow-y: auto;
    margin-top: 20px;

.address{
padding: 16px;
border-radius: 12px;
border: 1px solid var(--Lilac, #F1EEFC);
background: var(--White, #FCFCFC);
display: flex;
justify-content: space-between;

.left-container{
    display: flex;
    flex-direction: column;
    gap: 10px;

    h4,h5{
        font-size: 16px;
        color:#000;
        font-weight: 500;
    }
}
span{
        border-radius: 12px;
        width: 90px;
        height: 28px;
        background:#FFF2E5;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        gap: 8px;
        cursor: pointer;
        color:var(--primary-color);
    }
}
}
}


}

.order-details-container{
    margin-top: 32px;

    .tab-container{
        width: 400px;
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

.table-container{
    /* height: 220px;
    overflow-y: auto; */
}


    .mainTable{
    margin-top: 24px;
  border-collapse: collapse;
  width: 100%;
  vertical-align: middle;

 td, th {
  padding: 24px 14px;
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
    /* &:last-child{
        text-align: right;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
    &:first-child{
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    } */
}
    
    }



}

`