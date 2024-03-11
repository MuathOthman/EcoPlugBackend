# EcoPlug Charging System

## Introduction

Welcome to EcoPlug, an open-source electric vehicle (EV) charging system! This project aims to provide a scalable and efficient solution for managing EV charging stations. The system allows users to locate charging stations, view their details, and perform charging transactions seamlessly.

## Setup

### 1. Database Setup

#### ER Diagram

![ER Diagram](er_diagram.png)

The database consists of the following tables:

- **Sijainti**: Represents the charging station locations.
- **Sijaitsee**: Relates charging station locations to charging points.
- **Latauspiste**: Describes the charging points with their specifications.
- **Suorittaa**: Connects charging points with charging transactions.
- **Lataus**: Records information about charging transactions.

To set up the database, run the following queries in your MariaDB:

```sql
-- Create tables and insert sample data
