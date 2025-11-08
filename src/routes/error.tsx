import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError() as { statusText?: string; message?: string };

  console.error(error);

  return (
    <div className="flex flex-col justify-center items-center w-full" id="error-page">
      <h1>Упс!</h1>
      <p>Извините, произошла непредвиденная ошибка.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
