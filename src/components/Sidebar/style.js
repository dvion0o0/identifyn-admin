import styled from "styled-components";

export const SidebarContainer = styled.aside`
width: 235px;
position: relative;
top: 0;
left: 0;
bottom: 0;
height: 100vh;
background: #fff;
box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.23);
padding: 28px 20px;
display: flex;
justify-content: space-between;
flex-direction: column;

.close-sidebar{
position: absolute;
top: 40px;
right: -16px;
display: flex;
width: 30px;
height: 30px;
justify-content: center;
align-items: center;
filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.23));
box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.23);
background: #fff;
border-radius: 50%;
font-size: 12px;
font-weight: 700;
color: var(--primary-color);
cursor: pointer;
}



.logo{
    width: 180px;
}

.sidebar-logo{
    width:34px;
    height: 34px;
    margin-left: 8px;
    margin-top: 10px;
}

.links-wrapper{
    display: flex;
    flex-direction: column;
    gap: 20px;   
    position: relative;


.links{
    display: flex;
    flex-direction: column;
    gap: 5px; 

i{
    font-size: 20px;
}


.sub-link{
padding-left: 15px;
height: 0;
opacity: 0;
visibility: hidden;
transition: all 0.7ms cubic-bezier(0.075, 0.82, 0.165, 1);
}

.sub-link-active{
    height: max-content;
    opacity: 1;
    visibility: visible;
}

.link{
color:  #28272E;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px;   
display: flex;
gap: 15px;
align-items: center;
padding: 12px 16px;
position: relative;

.angle{
    position: absolute;
    right: 10px;
}


}

.active{
    color: var(--primary-color);
    font-weight: 700;
    background-color: #fff2e5;
    border-radius: 10px;
}

}
}

.profile-wrapper{
    display: flex;
    flex-direction: column;
    gap: 20px;

    .profile{
color:#6c6a73;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px;
display: flex;
    gap: 15px;
    align-items: center;
    cursor: pointer;

span{
    width: 28px;
    height: 28px;
    border-radius: 50%;
background:  #28272E;
backdrop-filter: blur(19px);
color: #fcfcfc;
display: flex;
justify-content: center;
align-items: center;
}
    }
}

`