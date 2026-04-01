declare module "react-gridlines" {
  import * as React from "react";
  interface GridLinesProps {
    className?: string;
    cellWidth?: number;
    cellWidth2?: number;
    strokeWidth?: number;
    children?: React.ReactNode;
  }
  const GridLines: React.FC<GridLinesProps>;
  export default GridLines;
}