import Button from "~/ui/Button";
import Container from "~/ui/Container";
import LabelInput from "~/ui/LabelInput";
import { Link } from "@remix-run/react";
import { RegisterBodyType } from "~/api/auth/postRegister";
import { authPaths } from "~/constants/paths";
import { useInputChange } from "~/hooks/useInputChange";
import { useState } from "react";

export default function Register() {
  const [registerBody, setRegisterBody] = useState<RegisterBodyType>({
    id: "",
    name: "",
    pw: "",
  });

  const handleInputChange = useInputChange(registerBody, setRegisterBody);

  return (
    <form>
      <Container>
        <div className="text-2xl text-extrabold">회원가입</div>
        <LabelInput
          label="이름"
          name="name"
          value={registerBody.name}
          onChange={handleInputChange}
        />
        <LabelInput label="아이디" name="id" value={registerBody.id} />
        <LabelInput
          label="비밀번호"
          type="password"
          name="pw"
          value={registerBody.pw}
          onChange={handleInputChange}
        />
        <Button label="입력 완료" />
        <Link className="text-center underline" to={authPaths.LOGIN}>
          로그인 하러가기
        </Link>
      </Container>
    </form>
  );
}
