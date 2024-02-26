pipeline {
    agent any // This specifies that the pipeline can run on any available agent

    tools {
        // Ensure Jenkins has a NodeJS installation named "NodeJS"
        nodejs "NodeJS"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checks out source code from the configured SCM (Source Control Management)
                checkout scm
            }
        }

        stage('Install') {
            steps {
                // Run 'npm install' to install dependencies
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                // Run your tests. This example uses 'npm test'.
                sh 'npm run test'
            }

            post {
                success {
                    echo 'Tests passed Successfully!'
                    // Configure Slack plugin in Jenkins for slackSend to work
                    slackSend(channel: '#jenkins-notification', color: 'good', message: "SUCCESS: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
                }
                failure {
                    echo 'Tests failed!'
                    // Configure Slack plugin in Jenkins for slackSend to work
                    slackSend(channel: '#jenkins-notification', color: 'danger', message: "FAILURE: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
                }
            }
        }

        stage('Coverage Report') {
            steps {
                // Ensure the HTML Publisher plugin is installed in Jenkins for publishHTML to work
                publishHTML(target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'coverage/lcov-report',
                    reportFiles: 'index.html',
                    reportName: 'Jest Coverage Report'
                ])
            }
        }

        stage('Build') {
            steps {
                // Uncomment and configure the build command according to your project's needs
                // sh 'npm run build'
                echo 'Building...'
            }
        }

        stage('Deploy') {
            steps {
                // Add steps to deploy your application
                echo 'Deploying...'
                // Implement deployment logic here (e.g., scp files, ssh commands, deployment scripts)
            }
        }
    }

    post {
        always {
            // Clean up your workspace to free up space
            cleanWs()
        }
    }
}
