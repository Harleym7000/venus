package net.amresources.venus.test;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class Test {

    public String getMyString() {
        return "Hello World!";
    }
}
