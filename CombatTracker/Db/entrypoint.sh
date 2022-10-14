# Run Microsoft SQl Server and initialization script (at the same time)
#!/usr/bin/env bash
#set -m
#/usr/src/app
#/run-initialization.sh & /opt/mssql/bin/sqlservr
chmod +x ./run-initilization.sh
chmod 755 ./run-initilization.sh

/usr/src/app/run-initialization.sh & /opt/mssql/bin/sqlservr
#fg