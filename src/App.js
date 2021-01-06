import React, { useState, useEffect } from "react";

import { Input, Form } from "antd";

export default function Simp() {

  // Video
  



  return (
    <>
      <div className="container">
      <div className="">
                <div className="">
                    <p className="generalHeading">
                      Sign Up Today 
                      </p>
                </div>
              <Form
                className=""
               
              >
                <Form.Item rules={[{ required: true }]} name="fName">
                  <Input
                    size="large"
                    placeholder="Your First Name?"
                    enterButton
                  />
                </Form.Item>
                <Form.Item rules={[{ required: true }]} name="lName">
                  <Input
                    size="large"
                    placeholder="Your Last Name?"
                    enterButton
                  />
                </Form.Item>
                
                <Form.Item rules={[{ required: true }]} name="Email">
                  <Input size="large" placeholder="Your Email?" enterButton />
                </Form.Item>

                <Form.Item rules={[{ required: true }]} name="Phone">
                  <Input size="large" placeholder="Your Phone?" enterButton />
                </Form.Item>

                <Form.Item rules={[{ required: true }]} name="Nationality">
                  <Input size="large" placeholder="Nationality?" enterButton />
                </Form.Item>

                <Form.Item rules={[{ required: true }]} name="Position">
                  <Input
                    size="large"
                    placeholder="Playing Position"
                    enterButton
                  />
                </Form.Item>

               
              </Form>
            </div>
      </div>
     
    </>
  );
}