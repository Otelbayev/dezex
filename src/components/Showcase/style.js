import styled from "styled-components";
import bg from "../../assets/bg3.jpg";
import bg1 from "../../assets/bg.jpg";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100dvh - 100px);
  background-image: url("${bg1}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 1;
  color: #fff;
  overflow: hidden;
  display: flex;
  align-items: center;
  
  .showcase {
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;
    justify-content: center;
    &__title {
      font-size: 60px;
      font-weight: 700;
      text-align: center;
    }
    &__mintitle {
      font-size: 30px;
      text-align: center;
    }
  }

  &::before {
    position: absolute;
    z-index: -1;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width: 700px) {
    height: calc(100dvh - 80px);
    background-image: url("${bg}");
    .showcase {
      gap: 30px;
      &__title {
        font-size: 36px;
      }
      &__mintitle {
        font-size: 20px;
      }
    }
  }
  @media screen and (max-width: 450px) {
    .showcase {
      &__title {
        font-size: 30px;
      }
      form {
        width: 100%;
        label {
          font-size: 18px;
        }
      }
    }
  }
`;
