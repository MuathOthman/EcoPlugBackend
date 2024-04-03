pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }
    stages {
        stage('Prepare Environment') {
            steps {
                script {
                    sh '''
                    echo "TWILIO_ACCOUNT_SID=${TWILIO_ACCOUNT_SID}" > .env
                    echo "TWILIO_AUTH_TOKEN=${TWILIO_AUTH_TOKEN}" >> .env
                    echo "SID=${SID}" >> .env
                    echo "DB_Docker_Container=${DB_Docker_Container}" >> .env
                    echo "DB_HOST=${DB_HOST}" >> .env
                    echo "DB_PORT=${DB_PORT}" >> .env
                    echo "DB_USER=${DB_USER}" >> .env
                    echo "DB_PASSWORD=${DB_PASSWORD}" >> .env
                    echo "DB_DATABASE=${DB_DATABASE}" >> .env
                    echo 'TWILIO_ACCOUNT_SID'
                    '''
                }
            }
        }
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Generate Coverage Report') {
            steps {
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
        stage('Build Application') {
            steps {
                sh 'docker build -t muathothman/ecoplugbe:latest .'
                echo 'Application built and Docker image created.'
            }
        }
        stage('Deploy Application') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'docker_hub_credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh '''
                        echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin
                        docker push muathothman/ecoplugbe:latest
                        '''
                    }
                }
                echo 'Deployment completed.'
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
