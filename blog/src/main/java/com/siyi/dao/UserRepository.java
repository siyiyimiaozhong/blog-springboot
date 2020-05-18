package com.siyi.dao;

import com.siyi.pojo.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    public User findByUsernameAndPassword(String username,String password);
}
