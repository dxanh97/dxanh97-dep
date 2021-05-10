import React from 'react';
import styled from 'styled-components';
import { SectionHeader } from '.';

const Wrapper = styled.div`
  padding: 16px;
  & > div.block {
    margin: 16px 0;
    &:last-child {
      margin: 16px 0 0;
    }
    & > p.title {
      margin: 8px 0;
      font-weight: bold;
    }
    & > p.time {
      margin: 8px 0;
      font-size: 16px;
      opacity: 0.7;
    }
    & > p.description {
      margin: 0;
    }
  }
`;

const WorkExperiences: React.FC = () => (
  <Wrapper>
    <SectionHeader title="Work Experiences" />
    <div className="block">
      <p className="title">Full-Stack Developer at Bakco, Ho Chi Minh City</p>
      <p className="time">Sep 2017 — Sep 2020</p>
      <p className="description">
        Maintain and develop new features for QTSC OMS (Quang Trung Software
        City Operations Management Suite) mobile app to minimize the amount of
        paper work and procedure for QTSC.
      </p>
    </div>
    <div className="block">
      <p className="title">Full-Stack Developer at Bakco, Ho Chi Minh City</p>
      <p className="time">Sep 2017 — Sep 2020</p>
      <p className="description">
        Responsible for developing Hospital Management module to help hospitals
        easily manage their own internal resources and connect with others using
        one platform.
      </p>
    </div>
    <div className="block">
      <p className="title">Full-Stack Developer at Bakco, Ho Chi Minh City</p>
      <p className="time">Sep 2017 — Sep 2020</p>
      <p className="description">
        Lead Front-End team of 2 to develop several apps like: • PHR (Personal
        Health Record) letting user to track their medical records and body
        indexes • CDS (Control Disease System) for HCDC to record and manage the
        Covid-19 infection chains in Ho Chi Minh city. Technologies used: React,
        Redux, TypeScript,
      </p>
    </div>
  </Wrapper>
);

export default WorkExperiences;
