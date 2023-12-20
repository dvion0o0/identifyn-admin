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

.mainTable{
  border-collapse: collapse;
  width: 100%;
  vertical-align: middle;

 td, th {
  padding: 10px 14px;
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
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
    &:first-child{
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }
}
    
    }

.status{
    button{
display: flex;
padding: 4px 4px 4px 4px;
justify-content: center;
align-items: center;
gap: 4px;
border-radius: 8px;
background: linear-gradient(0deg, rgba(255, 141, 36, 0.12) 0%, rgba(255, 141, 36, 0.12) 100%), #FFF;
font-size: 14px;
color: #ff8d24;
    }
span{
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 16px;
text-align:right;
color:#9a9a9a;
cursor: pointer;
    }

    .in-progress{
    background: linear-gradient(0deg, rgba(63, 27, 208, 0.12) 0%, rgba(63, 27, 208, 0.12) 100%), #FFF;
}

.shipped{
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.12) 100%), #FFF;
}

.completed{
    background: linear-gradient(0deg, rgba(51, 194, 94, 0.12) 0%, rgba(51, 194, 94, 0.12) 100%), #FFF;
}



}

.order-details{
    .horizontal-line{
        display: inline-block;
        width: 100%;
        height: 1px;
        background: #EDEDED;
    }

    .address-container{
        margin-top: 20px;
        margin-bottom: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;

        h4{
            font-size: 16px;
        }

        .address{
margin-top: 10px;
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

.items-container{
    margin-bottom: 20px;
    .item-header{
        display: flex;
        justify-content: space-between;
        align-items: center;

        h4{
            font-size: 16px;
            font-weight: 500;
        }

        span{
        border-radius: 12px;
        width: max-content;
        padding: 14px 16px;
        height: 40px;
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

.items-wrapper{
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 10px;

.item{
padding: 16px;
border-radius: 20px;
border: 1px solid #F1EEFC;
background:#FCFCFC;
display: flex;
flex-direction: column;
gap: 16px;

h4{
    color:#3F1BD0;
}

.item-details{
    display: grid;
    grid-template-columns: 60% auto auto;
    gap: 20px;
    align-items: center;

    h4{
        color:#000;
        font-weight: 400;
    }

.left-container{
    display: flex;
    gap:64px;
}

.right-container{
    justify-self: end;

    h4{
        color: #000;
        font-weight: 500;
    }
}


}
}
}
}

.summary{
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
border-radius: 20px;
border: 1px solid #F1EEFC;
background:#FCFCFC;

.summary-header{
    width: 100%;
    display: flex;
    justify-content: space-between;

    h5{
        font-size: 14px;
        color:#6C6A73;
        font-weight: 400;
    }

    h5:nth-child(even){
        color:#000;
    }
}

.summary-details{
    display: flex;
    justify-content: space-between;

    h5{
        font-size: 14px;
        color:#6C6A73;
        font-weight: 400;
    }

    .left-container,.right-container{
    display: flex;
    flex-direction: column;
    gap: 5px;
}
}

}



}




`