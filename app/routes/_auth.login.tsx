import { Link, useNavigate } from "@remix-run/react";
import postLogin, { LoginBodyType } from "~/api/auth/postLogin";

import { AxiosError } from "axios";
import Button from "~/ui/Button";
import Container from "~/ui/Container";
import LabelInput from "~/ui/LabelInput";
import { authPaths } from "~/constants/paths";
import { useInputChange } from "~/hooks/useInputChange";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [loginBody, setLoginBody] = useState<LoginBodyType>({
    name: "",
    password: "",
  });

  const handleInputChange = useInputChange(loginBody, setLoginBody);

  const onSubmitLoginForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await postLogin(loginBody);
      navigate("/main");
    } catch (e) {
      const error = e as AxiosError;
      if (error.response) {
        alert(error.response.data);
      } else {
        alert("An unexpected error occurred.");
      }
    }
  };

  return (
    <form onSubmit={onSubmitLoginForm}>
      <Container>
        <div className="text-2xl text-extrabold">로그인</div>
        <LabelInput
          label="아이디"
          name="name"
          value={loginBody.name}
          onChange={handleInputChange}
        />
        <LabelInput
          label="비밀번호"
          type="password"
          name="password"
          value={loginBody.password}
          onChange={handleInputChange}
        />
        <Button label="입력 완료" />
        <Link className="text-center underline" to={authPaths.REGISTER}>
          회원가입 하러가기
        </Link>
      </Container>
    </form>
  );
}
