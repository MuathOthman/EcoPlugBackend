# EcoPlug Charging Stations

![EcoPlug Logo](link-to-your-logo.png) <!-- If you have a logo, replace link-to-your-logo.png with the actual link -->

## Overview

EcoPlug Charging Stations is a project that manages electric vehicle charging stations, providing information about their locations, statuses, and usage.

## Table of Contents

1. [Introduction](#introduction)
2. [Database Schema](#database-schema)
3. [Setup](#setup)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license)

## Introduction

Briefly describe your project and its purpose. Include key features and functionalities.

## Database Schema

![EcoPlug Logo](<img width="600" alt="Näyttökuva 2024-3-11 kello 11 18 07" src="https://github.com/MuathOthman/EcoPlugBackend/assets/111856786/8420a6f4-2d15-409f-ab9b-f789a302ed68">
) <!-- If you have a logo, replace link-to-your-logo.png with the actual link -->

### Sijainti Table

| sijainti_ID | latitude | longitude | nimi | osoite | kaupunki | postinumero |
|--------------|----------|-----------|------|--------|----------|-------------|
| ...          | ...      | ...       | ...  | ...    | ...      | ...         |

### Sijaitsee Table

| sijainti_ID | latauspisteID |
|-------------|---------------|
| ...         | ...           |

### Latauspiste Table

| latauspisteID | tila | latausteho | sahkonhinta | parkki |
|---------------|------|------------|-------------|--------|
| ...           | ...  | ...        | ...         | ...    |

### Suorittaa Table

| latauspisteID | latausID |
|---------------|----------|
| ...           | ...      |

### Lataus Table

| latausID | kokonaisaika | laskunhinta | asiakas_puh |
|----------|--------------|-------------|-------------|
| ...      | ...          | ...         | ...         |

Provide a brief explanation of your database schema, including the tables and their columns.

## Setup

1. **MySQL Setup:**
   - Install MySQL on your machine.
   - Create a new database for this project.
   - Create tables and insert sample data using the provided SQL queries.

2. **Application Setup:**
   - Clone the repository.
   - Install dependencies (if any).

3. **Configuration:**
   - Update the `config.js` or any configuration file with your database connection details.

```javascript
module.exports = {
  database: {
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database_name',
  },
  // Other configuration options...
};
