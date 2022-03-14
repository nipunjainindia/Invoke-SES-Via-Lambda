# Invoke-SES-Via-Lambda
Invoke AWS Simple Email Service via AWS Lambda

SetUp
1. Create an IAM policy using the JSON policy editor. When you create the policy, paste the following JSON policy document into the policy editor:
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ses:SendEmail",
                "ses:SendRawEmail"
            ],
            "Resource": "*"
        }
    ]
}
2. Attach the IAM policy to an IAM role.
3. Create a Lambda function.
4. Deploy Lambda.
