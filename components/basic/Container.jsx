import styled from "styled-components";
import React from "react";
import { useState } from "react";

const Container = (props) => {
  const [authorized, setAuthorized] = useState(true);

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  // const loadData = async () => {
  //   try {
  //     const isAuthorized = await dispatch(getAdminUsers());
  //     if (isAuthorized.meta.requestStatus === "rejected") {
  //       throw e;
  //     } else {
  //       setAuthorized(true);
  //     }
  //   } catch (e) {
  //     window.location.href = `${origin}/500`;
  //   }
  // };

  // useEffect(() => {
  //   loadData();
  // }, []);

  // useEffect(() => {
  //   if (headerNotificationData) {
  //     setHeaderNotification(headerNotificationData.displayNotification);
  //   }
  // }, [headerNotificationData]);

  if (authorized) {
    return (
      <StyledPageContainer>
        <StyledDashboardMain>
          {props.children}
        </StyledDashboardMain>
      </StyledPageContainer>
    );
  }
};

export default Container;

const StyledPageContainer = styled.div`
  height: 100vh !important;
  max-height: 100vh !important;
  width: 100%;
  display: flex;
  font-family: ${({ theme }) => theme.fontFamilyMain};
  font-size: ${({ theme }) => theme.fontSizeMD};
  margin: 0;
`;

const StyledDashboardMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: ${({ theme, notification }) =>
    notification ? theme.mainPaddingWithNotification : theme.mainPadding};
  background-color: ${({ theme }) => theme.grey25};
  overflow: auto;
`;
