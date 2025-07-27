# NGINX-HOME-LAB
NGINX-Home-Lab simulates an enterprise setup using AlmaLinux VMs with NGINX reverse proxy, DNS, and Ansible. It hosts multiple secure websites on the same IP with Apache servers and load balancing for better performance and reliability.

Lab Overview

In a typical enterprise environment, it is often necessary to host multiple websites under the same IP address while ensuring high availability and a smooth user experience. 

This lab simulates such a scenario by implementing an NGINX reverse proxy with load balancing. The goal is to distribute incoming traffic between multiple identical backend servers using the round-robin algorithm to improve performance and reliability.

The environment consists of four AlmaLinux-8 virtual machines created using VMware Workstation-17. One of the VMs acts as the master and hosts a DNS server, an Ansible controller for managing the other VMs, and an NGINX reverse proxy. The other three VMs are slave nodes running Apache web servers, each hosting two static websites built with HTML, CSS, and JavaScript.

All three backend servers are identical except for their IP addresses. Self-signed SSL certificates were generated and configured for secure HTTPS connections. For testing purposes, SELinux and the firewall were disabled across all machines ( not recommended in production environments ). And also all slave virtual machines share the same root password for simplicity and centralized management in this lab environment. This allows easy SSH access and Ansible control.

This lab demonstrates how to design and implement a basic real-world infrastructure that supports multiple websites on the same IP with traffic load balancing for a better user experience.
