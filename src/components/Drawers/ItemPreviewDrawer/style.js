import styled from "styled-components";


export const DrawerWrapper = styled.div`
   position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.28);
    backdrop-filter: blur(2px);
    z-index: 100 !important;
    display: flex;
    justify-content: flex-end;
    overflow-y: auto;


    .small-modal-content {
        position: relative;
        height: max-content;
        width: 530px;
        display: flex;
        gap: 20px;
        // align-items: center;
        flex-direction: column;
        background-color: #ffffff;
        padding: 20px 24px;
        background: #FFF;
        box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.08);

        @media screen and (max-width: 1100px) {
            width: 100vw;
            flex-direction: column;
        }


.header{
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2{
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 28px; 
color: var(--primary-color);
    }

 .icons-container{
     display: flex;
     gap: 20px;
     align-items: center;
     color: #9a9a9a;
     font-size: 20px;

     i{
        cursor: pointer;
     }
 }   

}

.tab-container, .items-container{
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
  padding: 12px 10px;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
    }

    .tab-active{
        background-color: #FFF2E5;
        color: var(--primary-color);
        border-radius: 12px;
    }

    }

.items-container{
    flex-direction: column;
    gap: 10px;
    height: max-content;
    background: transparent;

    button{
        width: 100%;
        border-radius: 12px;
        border: 1px solid #F1EEFC;
        opacity: 0.6;           
        background: #FCFCFC;  
    }

    .tab-active{
        background-color: var(--primary-color);
        color: #FFF;
        opacity: 1;
    }
}   


.item-details-container{
border-radius: 12px;
background: rgba(237, 237, 237, 0.40);
display: flex;
padding: 16px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 20px;
align-self: stretch;

h4{
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
}

h5{
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
}

.item-detail-header{
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
}

span{
display: flex;
height: 40px;
padding: 12px 10px;
justify-content: center;
align-items: center;
gap: 8px;
border-radius: 12px;
background:#D74C10;
color: #FCFCFC;
font-weight: 500;
font-size: 16px;
}


.item-content{
    width: 100%;
    display: flex;
    justify-content: space-between;

    .left-container{
        display: flex;
        flex-direction: column;
        gap: 8px;
        h4{
            color: #6c6a73;
            font-weight: 400;
        }
    }

    .right-container{
        display: flex;
        flex-direction: column;
        gap: 8px;
        justify-content: flex-end;
        text-align: right;

.application-container{
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    
    span{
    background: linear-gradient(0deg, rgba(255, 141, 36, 0.16) 0%, rgba(255, 141, 36, 0.16) 100%), #FFF;
    color:var(--primary-color);
    cursor: pointer;
    }
}

    }
}
}

.item-image-container{
position: relative;

.images-container{
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 16px;

.image{
    display: flex;
    flex-direction: column;
    gap: 8px;
    cursor: pointer;
    img{
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 10px;
    }

    h6{
        font-size: 12px;
        font-weight: 400;
        color:#6c6a73;
        text-align: center;
    }

}

}


.buttons-container{
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        width: 32px;
        height: 32px;
        border-radius: 8px;
    background:#FFF2E5;
    color: #D74C10;
    }

    .dots{
        display: flex;
        gap: 5px;
        align-items: center;

        span{
            width: 8px;
            height: 6px;
            border-radius: 12px;
            background-color: #9a9a9a;
        }

        .active-dot{
            background-color: var(--primary-color);
            width: 16px;
        }
    }


}


}



    }

`