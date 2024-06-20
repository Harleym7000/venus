package net.amresources.venus.test

import spock.lang.Specification

class TestSpec extends Specification {

    TestSpec test = Mock(TestSpec)

    def "Returns the sum of two numbers"() {
        given:
        def int1 = 4;
        def int2 = 5;

        when:
        def result = test.getMyString()

        then:
        result == 9
    }
}
