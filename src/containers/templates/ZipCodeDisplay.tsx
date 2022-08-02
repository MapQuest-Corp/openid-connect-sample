import React, { FC, Suspense } from "react";
import { Button, LinearProgress } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import { QueryErrorResetBoundary } from "react-query";
import ZipCodeResult from "containers/templates/ZipCodeResult";

type zipCodeProps = {
  zipCode: string;
};

// ErrorBoundaryとSuspenseを使用して非同期のデータ取得の処理を行う
const ZipCodeDisplay: FC<zipCodeProps> = ({ zipCode }) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          // eslint-disable-next-line react/no-unstable-nested-components
          fallbackRender={({ resetErrorBoundary }) => (
            <div>
              <p>There was an error!</p>
              <Button variant="contained" onClick={() => resetErrorBoundary()}>
                Try again
              </Button>
            </div>
          )}
        >
          <Suspense fallback={<LinearProgress />}>
            <ZipCodeResult zipCode={zipCode} />
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default ZipCodeDisplay;
