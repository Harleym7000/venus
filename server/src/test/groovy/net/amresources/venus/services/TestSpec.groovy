package net.amresources.venus.services

import spock.lang.Specification;

class TestSpec extends Specification {

    def "returns the result of two numbers"() {
        given:
        def a = num1
        def b = num2

        when:
        def result = num1 + num2

        then:
        result == expectedResult

        where:
        num1 | num2 || expectedResult
        2    | 3    || 5
        9    | 8    || 17
    }
}