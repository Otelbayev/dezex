import styled from "styled-components";
import bg from "../../assets/bg2.jpg";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100dvh - 100px);
  background-image: url("${bg}");
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
    form {
      background: #fff;
      /* width: 400px; */
      padding: 20px;
      border-radius: 5px;
      box-shadow: 1px 1px 10px #fff;
      display: flex;
      flex-direction: column;
      gap: 10px;
      label {
        color: var(--dark);
        font-weight: 700;
        font-size: 30px;
        text-align: center;
        max-width: 500px;
      }
      input {
        outline: none;
        border: 1px solid var(--dark);
        padding: 5px 10px;
        font-size: 16px;
        border-radius: 3px;
      }
      button {
        background: var(--dark);
        color: #fff;
        font-size: 16px;
        font-weight: 400;
        padding: 8px 0;
        border: none;
        border-radius: 3px;
        transition: 0.5s;
        &:active {
          transform: scale(0.97);
          opacity: 0.5;
        }
      }
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
    .showcase {
      gap: 30px;
      &__title {
        font-size: 36px;
      }
      form {
        width: 100%;
        label {
          font-size: 20px;
        }
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
