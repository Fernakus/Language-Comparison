#!/usr/bin/perl
use strict;
use warnings;

package Triangle
sub Triangle_data
{
    my ($class, $args)

    my $self = {
        lines => $args->{lines} || 10,
    };

    sub print_triangle()
    {
        print "-- Perl Triangle --"
        for (my $i = 0; $i < $self->{lines}; $i++)
        {
            for (my $j = 0; $j <= $i; $j++)
            {
                print "#";
            }
            print "\n";
        }
    }

    return bless $self, $class;
}

my $triangle = Triangle->Triangle_data(20);
$triangle->print_triangle();
