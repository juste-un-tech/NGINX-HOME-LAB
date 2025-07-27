#!/bin/bash

user="root"
password="d"
subnet="192.168.1"

for i in {11..13}; do
    host="$subnet.$i"
    sshpass -p "$password" ssh-copy-id -o StrictHostKeyChecking=no "$user@$host"
done

