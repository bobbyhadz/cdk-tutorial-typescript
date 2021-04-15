# CDK Tutorial for Beginners - Step-by-Step Guide [TypeScript]

A repository for an article on
[bobbyhadz.com](https://bobbyhadz.com/blog/aws-cdk-tutorial-typescript) that
shows how to get starter with AWS CDK using TypeScript.

## How to Use

It's best to follow the article step-by-step, however if you want to deploy the
Stacks from this repository you can:

1. Clone the repository

```bash
git clone git@github.com:bobbyhadz/cdk-tutorial-typescript.git && cd cdk-tutorial-typescript
```

2. Install the dependencies

```bash
npm install
```

3. Create the CDK stacks

```bash
npx cdk deploy \
  cdk-stack-dev \
  cdk-stack-prod
```

4. Open the AWS Console and the stack should be created in your default region

5. Clean Up

```bash
npx cdk destroy \
  cdk-stack-dev \
  cdk-stack-prod
```
