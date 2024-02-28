import { Form } from "antd";
import React from "react";
import {
  AntdInput,
  AntdUploder,
  EditButton,
  SaveButton,
} from "../../common/Index";

const UserProfile = () => {
  const handleOnFinish = (value) => {
    console.log("andtinput", value);
  };
  return (
    <div>
      <Form layout="vertical" onFinish={handleOnFinish}>
        <div className="flex justify-between">
          <div className="grid gap-x-2 md:grid-cols-12 grid-flow-row">
            <div className="md:col-span-4">
              <AntdInput name="first_name" label="First Name" required />
            </div>

            <div className="md:col-span-4">
              <AntdInput name="last_name" label="Last Name" required />
            </div>

            <div className="md:col-span-4">
              <AntdInput name="email" label="Email" />
            </div>

            <div className="md:col-span-4">
              <AntdInput name="contact" label="Contact" />
            </div>

            <div className="md:col-span-4">
              <AntdInput name="address" label="Address" />
            </div>
            <div className="md:col-span-4 gap-2 flex items-center">
              <div>
                <SaveButton type="submit" loading={false} />
              </div>
              <div>
                <EditButton />
              </div>
            </div>
          </div>

          <div className="w-[10%] justify-end flex">
            <AntdUploder name="photo" />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default UserProfile;
