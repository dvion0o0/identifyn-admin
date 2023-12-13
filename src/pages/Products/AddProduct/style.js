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
    display: flex;
    align-items: center;
    gap: 15px;

    .transparent{
font-size: 1rem;
  font-weight: 500;
  text-align: center;
  padding: 1rem 1.2rem;
    }

    .btn{
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

`

export const ContentWrapper = styled.div`
height: calc(100vh - 110px);
padding: 30px 0px 30px 0px;
overflow-y: auto;

.catalog-options{
    width: 70%;
    padding: 0 44px 44px 44px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

.first-container,.second-container{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.sub-product{
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.radio-wrapper{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 25px;


    .input-wrapper{
        width: 100px !important;
    }

    input[type="text"]{
        width: 90px;
        height: 44px;
        text-align: right;

        &:focus{
            border: 2px solid var(--primary-color);
        }
    }
}


.radio-containers > span{
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #6C6A73;
}

.active-radio > span{
    color: var(--primary-color);
    font-weight:500
}

.batch-wrapper{
    margin-top: 20px;

    h4{
        font-size: 16px;
        margin-bottom: 10px;
    }

    p{
        font-size: 14px;
        color: #6C6A73;
    }

    .batch-input-wrapper{
        margin-top: 16px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;

        input[type="text"]:focus{
            border: 2px solid var(--primary-color);
        }
    }
}

}

`

export const ProtienInformation = styled.div`
margin-bottom: 44px;
.header{
    height: 48px;
    width: 100%;
    background:#F8F7FE;
    display: flex;
align-items: center;
justify-content: space-between;
padding: 0 44px;

h4{
    font-size:16px;
    color: var(--primary-color);
}
}

.content{
padding: 0 44px;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 30px;

.reference-wrapper{
    margin-top: 20px;

    h4{
        font-size: 16px;
        margin-bottom: 10px;
    }

    p{
        font-size: 14px;
        color: #6C6A73;
    }

    .reference-input-wrapper, .single-input-wrapper{
        margin-top: 16px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;

        input[type="text"]:focus{
            border: 2px solid var(--primary-color);
        }
    }

    .single-input-wrapper{
        grid-template-columns: 1fr;
    }
    textarea {
                width: 100%;
                height: 128px;
                color: #7d8ca5;
                font-weight: 400;
                padding: 10px 12px;
                outline: unset !important;
                overflow: hidden;
                border-radius: 12px;
                border: 2px solid #F1EEFC;
                background: #FCFCFC;
                backdrop-filter: blur(19px);
                color: #27282E;
                text-overflow: ellipsis;
                white-space: nowrap;

                :focus-visible {
                    outline: unset !important;
                }

                &::placeholder {
                    color: #27282E;
                    font-style: normal;
                    font-size: 14px;
                    line-height: 20px;
                    opacity: 0.5;
                }

                @media (max-width: 1000px) {
                    height: 140px !important;
                }
            }
}

}
`

export const ProductInformation = styled.div`
margin-bottom: 44px;
.header{
    height: 48px;
    width: 100%;
    background:#F8F7FE;
    display: flex;
align-items: center;
justify-content: space-between;
padding: 0 44px;

h4{
    font-size:16px;
    color: var(--primary-color);
}
}

.content{
padding: 0 44px;
display: grid;
grid-template-columns: 50% 50%;
gap: 30px;

}

.reference-wrapper{
    margin-top: 20px;

    h4{
        font-size: 16px;
        margin-bottom: 10px;
    }

    p{
        font-size: 14px;
        color: #6C6A73;
    }

    .reference-input-wrapper, .single-input-wrapper{
        margin-top: 16px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;

        input[type="text"]:focus{
            border: 2px solid var(--primary-color);
        }
    }

    .single-input-wrapper{
        grid-template-columns: 1fr;
    }

    .multiple-input-wrapper{
        margin-top: 16px;
        display: flex;
        flex-wrap: wrap;
        gap:12px;

        .btn{
            background: transparent;
            color: #000;
            border: 1px solid #F1EEFC;
            font-weight: 400;
        }

        .active-btn{
            background: var(--primary-color);
            color:#fff;
        }


    }


    textarea {
                width: 100%;
                height: 128px;
                color: #7d8ca5;
                font-weight: 400;
                padding: 10px 12px;
                outline: unset !important;
                overflow: hidden;
                border-radius: 12px;
                border: 2px solid #F1EEFC;
                background: #FCFCFC;
                backdrop-filter: blur(19px);
                color: #27282E;
                text-overflow: ellipsis;
                white-space: nowrap;

                :focus-visible {
                    outline: unset !important;
                }

                &::placeholder {
                    color: #27282E;
                    font-style: normal;
                    font-size: 14px;
                    line-height: 20px;
                    opacity: 0.5;
                }

                @media (max-width: 1000px) {
                    height: 140px !important;
                }
            }
}


`

export const PriceInformation = styled.div`
.header{
    height: 48px;
    width: 100%;
    background:#F8F7FE;
    display: flex;
align-items: center;
justify-content: space-between;
padding: 0 44px;

h4{
    font-size:16px;
    color: var(--primary-color);
}
}

.content{
padding: 0 44px;
display: grid;
grid-template-columns: 1fr;
gap: 30px;

.reference-wrapper{
    margin-top: 20px;

    h4{
        font-size: 16px;
        margin-bottom: 10px;
    }

    p{
        font-size: 14px;
        color: #6C6A73;
    }

    .multiple-input-wrapper{
        margin-top: 16px;
        display: flex;
        flex-wrap: wrap;
        gap:12px;

        .btn{
            background: transparent;
            color: #000;
            border: 1px solid #F1EEFC;
            font-weight: 400;
            width: 80px;
        }

        .active-btn{
            background: var(--primary-color);
            color:#fff;
        }


    }

}

}
`

export const ProductFormulation = styled.div`
margin-bottom: 44px;
.header{
    height: 48px;
    width: 100%;
    background:#F8F7FE;
    display: flex;
align-items: center;
justify-content: space-between;
padding: 0 44px;

h4{
    font-size:16px;
    color: var(--primary-color);
}
}

.content{
padding: 0 44px;
display: grid;
grid-template-columns: repeat(6, 1fr);
gap: 20px;

.reference-wrapper{
    margin-top: 20px;

    h4{
        font-size: 16px;
        margin-bottom: 10px;
    }

    p{
        font-size: 12px;
        color: #6C6A73;
    }

    .reference-input-wrapper, .single-input-wrapper{
        margin-top: 16px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;

        input[type="text"]:focus{
            border: 2px solid var(--primary-color);
        }
    }

    .single-input-wrapper{
        grid-template-columns: 1fr;
 
    }

    .multiple-input-wrapper{
        margin-top: 16px;
        display: flex;
        flex-wrap: wrap;
        gap:12px;

    }

    .btn{
            background: transparent;
            color: #000;
            border: 1px solid #F1EEFC;
            width: 100%;
            font-weight: 400;
        }

        .active-btn{
            background: var(--primary-color);
            color:#fff;
        }

}

}
`

export const ImageInformation = styled.div`
margin-bottom: 44px;
.header{
    height: 48px;
    width: 100%;
    background:#F8F7FE;
    display: flex;
align-items: center;
justify-content: space-between;
padding: 0 44px;

h4{
    font-size:16px;
    color: var(--primary-color);
}
}

.content{
padding: 28px 44px 0 44px;
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;

.image-card{
width: 100%;
padding: 20px 16px 16px 16px;
flex-direction: column;
border-radius: 16px;
background: rgba(237, 237, 237, 0.60);

h4{
    font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 20px; 
text-align: center;
color:#000;
}

.img-container{
position: relative;
margin: 20px 0 16px 0;
height: 132px;
border-radius: 12px;
border: 1px dashed #F1EEFC;
background: #FCFCFC;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-image: url('../../../../media/LogoBlack.png');
background-repeat: no-repeat;
background-position: center;

input{
        opacity: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        cursor: pointer;
}

i{
    font-size: 20px;
    color: var(--primary-color);
}

    p{
margin-top: 10px;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 16px; 
color: #6c6a73;
    }
}

.method-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    color:#6c6a73;
    margin-bottom: 5px;
}

.single-input-wrapper{
        grid-template-columns: 1fr;
    }
    textarea {
                width: 100%;
                height: 128px;
                color: #7d8ca5;
                font-weight: 400;
                padding: 10px 12px;
                outline: unset !important;
                overflow: hidden;
                border-radius: 12px;
                border: 2px solid #F1EEFC;
                background: #FCFCFC;
                backdrop-filter: blur(19px);
                color: #27282E;
                text-overflow: ellipsis;
                white-space: nowrap;

                :focus-visible {
                    outline: unset !important;
                }

                &::placeholder {
                    color: #27282E;
                    font-style: normal;
                    font-size: 14px;
                    line-height: 20px;
                    opacity: 0.5;
                }

                @media (max-width: 1000px) {
                    height: 140px !important;
                }
            }

}

}
`


export const DyeInformation = styled.div`
margin-bottom: 44px;
.header{
    height: 48px;
    width: 100%;
    background:#F8F7FE;
    display: flex;
align-items: center;
justify-content: space-between;
padding: 0 44px;

h4{
    font-size:16px;
    color: var(--primary-color);
}
}

.content{
padding: 0 44px;
display: grid;
grid-template-columns: repeat(6, 1fr);
gap: 30px;

.reference-wrapper{
    margin-top: 20px;

    h4{
        font-size: 16px;
        margin-bottom: 10px;
    }

    p{
        font-size: 12px;
        color: #6C6A73;
    }

    .reference-input-wrapper, .single-input-wrapper{
        margin-top: 16px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;

        input[type="text"]:focus{
            border: 2px solid var(--primary-color);
        }
    }

    .single-input-wrapper{
        grid-template-columns: 1fr;
 
    }

    .multiple-input-wrapper{
        margin-top: 16px;
        display: flex;
        flex-wrap: wrap;
        gap:12px;

    }

    .btn{
            background: transparent;
            color: #000;
            border: 1px solid #F1EEFC;
            width: 100%;
            font-weight: 400;
        }

        .active-btn{
            background: var(--primary-color);
            color:#fff;
        }

}

}
`