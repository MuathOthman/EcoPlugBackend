pipeline {
    agent any // This specifies that the pipeline can run on any available agent
    tools {
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
                // You can also use other test runners like Jest, Mocha, etc.
                sh 'npm run test'
            }

            post {
                // Define actions to take based on the outcome of the 'Test' stage
                always {
                    // For example, archive JUnit-formatted test reports
                    junit '**/test-results/**/*.xml'
                }
                success {
                    echo 'Tests passed Successfully!'
                    slackSend(
                                channel: '#jenkins-notification',
                                color: 'good',
                                message: "SUCCESS: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})"
                            )
                }
                failure {
                    echo 'Tests failed!'
                    slackSend(
                                channel: '#jenkins-notification',
                                color: 'danger',
                                message: "FAILURE: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})"
                            )
                }
            }
        }

        stage('Build') {
            steps {
                // Run a build script or a command. This could involve bundling your Node.js application.
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // Add steps to deploy your application
                // This might involve SSHing to a server, using a deployment tool, or pushing to a cloud service
                script {
                    echo 'Deploying...'
                }
            }
        }
    }

    post {
        // Define actions to take based on the overall pipeline result
        always {
            // For example, clean up temporary files
            sh 'npm clean'
        }
    }
}
