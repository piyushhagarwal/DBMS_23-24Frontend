import { useRouter } from "next/router";

function Snug() {
  const router = useRouter();
  const { snug } = router.query;
  return <div>{snug}</div>;
}

export default Snug;
