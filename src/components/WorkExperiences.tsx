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
      background: ${(props) => props.theme.text};
    }
    &::after {
      content: '';
      position: absolute;
      top: 20px;
      left: 2px;
      height: calc(100% - 24px);
      border-left: 1px solid ${(props) => props.theme.text};
    }
    &:last-child {
      margin-bottom: 0;
    }
    & > p.title {
      margin: 8px 0;
      & a {
        text-decoration: underline 1px;
        color: ${(props) => props.theme.text};
      }
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
        <b>Full-Stack Developer</b>
        <span> at </span>
        <b>
          <a target="_blank" href="https://www.facebook.com/hisoftcompany/">
            HiSoft
          </a>
        </b>
      </p>
      <p className="time">Mar 2017 — Sep 2017</p>
      <p className="description">
        Maintain and develop new features for <b>QTSC OMS</b> (
        <b>Quang Trung Software City Operations Management Suite</b>) mobile app
        to minimize the amount of paper work and procedure for <b>QTSC</b>.
      </p>
    </div>
    <div className="block">
      <p className="title">
        <b>Full-Stack Developer</b>
        <span> at </span>
        <b>
          <a target="_blank" href="http://www.bakco.com.vn/">
            Bakco
          </a>
        </b>
      </p>
      <p className="time">Nov 2017 - July 2018 & July 2019 — Sep 2020</p>
      <p className="description">
        Responsible for developing <b>Hospital Management</b> module to help
        hospitals easily manage their own internal resources and connect with
        others using one platform.
      </p>
      <br />
      <p className="description">
        Lead Front-End team of 2 to develop several apps like:
        <br />• <b>PHR</b> (<b>Personal Health Record</b>) letting user to track
        their medical records and body indexes
        <br />• <b>CDS</b> (<b>Control Disease System</b>) for <b>HCDC</b> to
        record and manage the Covid-19 infection chains in <b>HCM</b> city.
      </p>
    </div>
    <div className="block">
      <p className="title">
        <b>Full-Stack Developer</b>
        <span> at </span>
        <b>
          <a target="_blank" href="https://www.codelink.io/">
            CodeLink
          </a>
        </b>
      </p>
      <p className="time">Oct 2020 - Present</p>
      <p className="description">
        Update the company's website and add a ci config to build automatically
        using <b>CircleCI</b>
      </p>
      <br />
      {/* prettier-ignore */}
      <p className="description">
        Outsourcing for <b>Electronic Arts</b> to help build an application that
        manage marketing assets (videos, images, ...)
        and use <b>machine learning</b> and <b>serverless</b> to
        create audience targeted marketing videos
      </p>
    </div>
  </Wrapper>
);

export default WorkExperiences;
