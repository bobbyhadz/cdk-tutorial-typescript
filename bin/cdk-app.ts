#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import 'source-map-support/register';
import {CdkAppStack} from '../lib/cdk-app-stack';

const app = new cdk.App();
new CdkAppStack(app, 'cdk-stack-dev', {
  stackName: 'cdk-stack-dev',
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
