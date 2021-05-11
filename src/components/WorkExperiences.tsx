import React from 'react';
import styled from 'styled-components';
import { SectionHeader } from '.';

const Wrapper = styled.div`
  padding: 16px;
  & > div.block {
    position: relative;
    margin: 16px 0;
    padding-left: 16px;
    &::before {
      content: '';
      position: absolute;
      top: 4px;
      left: 0;
      height: 6px;
      width: 6px;
      border-radius: 50%;
      background: #000000;
    }
    &::after {
      content: '';
      position: absolute;
      top: 20px;
      left: 2px;
      height: calc(100% - 24px);
      border-left: 1px solid;
    }
    &:last-child {
      margin: 16px 0 0;
    }
    & > p.title {
      margin: 8px 0;
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
      <p className="title">
        <b>Full-Stack Developer</b> at <b>Bakco</b>
      </p>
      <p className="time">Sep 2017 — Sep 2020</p>
      <p className="description">
        Maintain and develop new features for <b>QTSC OMS</b> (
        <b>Quang Trung Software City Operations Management Suite</b>) mobile app
        to minimize the amount of paper work and procedure for <b>QTSC</b>.
      </p>
    </div>
    <div className="block">
      <b>Full-Stack Developer</b> at <b>Bakco</b>
      <p className="time">Sep 2017 — Sep 2020</p>
      <p className="description">
        Responsible for developing <b>Hospital Management</b> module to help
        hospitals easily manage their own internal resources and connect with
        others using one platform.
      </p>
    </div>
    <div className="block">
      <b>Full-Stack Developer</b> at <b>Bakco</b>
      <p className="time">Sep 2017 — Sep 2020</p>
      <p className="description">
        Lead Front-End team of 2 to develop several apps like:
        <br />• <b>PHR</b> (<b>Personal Health Record</b>) letting user to track
        their medical records and body indexes
        <br /> • <b>CDS</b> (<b>Control Disease System</b>) for HCDC to record
        and manage the Covid-19 infection chains in Ho Chi Minh city.
        Technologies used: React, Redux, TypeScript,
      </p>
    </div>
  </Wrapper>
);

export default WorkExperiences;
