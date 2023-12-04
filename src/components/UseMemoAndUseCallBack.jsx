import { useState, useMemo } from "react";
export default function UseMemoAndUseCallBack() {
  const [numbers] = useState([1, 2, 3, 4, 5]);
  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );
  return <>{total}</>;
}
