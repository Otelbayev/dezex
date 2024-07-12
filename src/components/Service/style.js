import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 0;

  .content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 20px 0;
    gap: 20px;
    .cart {
      cursor: pointer;
      border: 1px solid var(--dark);
      border-radius: 3px;
      overflow: hidden;
      &__bottom {
        height: 25%;
        transform: translateY(-5px);
      }
      &__title {
        background: #fff;
        font-size: 18px;
        font-weight: 600;
        color: var(--dark);
        padding: 10px;
        text-align: center;
      }
      img {
        width: 100%;
        height: 75%;
        border-radius: 3px 3px 0 0;
        transition: transform 0.3s;
        &:hover {
          transform: scale(1.05);
        }
      }
      &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }
    }
  }
  @media (max-width: 900px) {
    .content {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 600px) {
    .content {
      grid-template-columns: 1fr;
      padding: 10px 20px;
    }
  }
`;

export const Sale = styled.div`
  padding: 50px 0;
  background: rgb(242, 242, 242);
`;
