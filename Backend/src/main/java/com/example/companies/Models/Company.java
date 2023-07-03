package com.example.companies.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "companies")
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long ID;

    @Column(name = "Name")
    private String Name;

    @Column(name = "Address")
    private String Address;

    @Column(name = "PhoneNumber")
    private String PhoneNumber;

    @Column(name = "EmailAddress")
    private String EmailAddress;

    public Company() {

    }
    public Company(String name, String address, String phoneNumber, String emailAddress) {
        this.Name = name;
        this.Address = address;
        this.PhoneNumber = phoneNumber;
        this.EmailAddress = emailAddress;
    }

    public long getID() {
        return ID;
    }

    public String getName() {
        return Name;
    }

    public String getAddress() {
        return Address;
    }

    public String getPhoneNumber() {
        return PhoneNumber;
    }

    public String getEmailAddress() {
        return EmailAddress;
    }
}
